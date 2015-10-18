<script type="text/javascript">
today = new Date ();
BigDay = new Date ("October 6, 2015");
msPerDay = 24 * 60 * 60 * 1000;
timeLeft = (BigDay.getTime() - today.getTime());
e_daysLeft = timeLeft / msPerDay;
daysLeft = Math.floor(e_daysLeft);
e_hrsLeft = (e_daysLeft - daysLeft) * 24;
hrsLeft = Math.floor(e_hrsLeft);
minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);
document.getElementById('days').innerHTML=daysLeft;
</script>
