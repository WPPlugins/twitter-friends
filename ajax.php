<?
include('../../../wp-config.php');
function tf_post_to_twitter($update)
{
	$username = get_option('twitter_friends_username');
	$password = get_option('twitter_friends_password');
	$url = "http://twitter.com/statuses/update.xml";
	//echo $url;
	$result = hit_twitter($username, $password, $url, 1, "status=".urlencode($update));
	return $result;
}

function remove_follower($follower)
{
	$username = get_option('twitter_friends_username');
	$password = get_option('twitter_friends_password');
	$url =  "http://twitter.com/blocks/create/".$follower.".xml";
	$array = hit_twitter($username, $password, $url);
	return $array;
}

switch($_POST['todo'])
{
case "post":
	$results = tf_post_to_twitter($_POST['post']);
	if($results->error=='')
	echo "<div style='color:#4c9d07'>Tweet was successfull</div>";
	else
	echo "<div style='color:#cc0000'>Tweet Failed:</div>".$results->error;
break;

case "remove":
	$results = remove_follower($_POST['username']);
	if($results->error=='')
	echo "<div style='color:#4c9d07'>Blocked</div>";
	else
	echo "<div style='color:#cc0000'>Not Blocked</div>".$results->error;
break;
}

?>
