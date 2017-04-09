console.log('analitycs.js running code');

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-70407066-5', 'auto');



// Un page view implica que se abrio la app
ga('send', 'pageview');

ga('send', 'event', {
	eventCategory: 'ad_placeholder',
	eventAction: 'ad_loaded'
});

function handleOutboundLinkClicks(event) {
	ga('send', 'event', {
		eventCategory: 'ad_placeholder',
		eventAction: 'ad_clicked',
		eventLabel: event.target.href
	});
}
$("#ad_link").click(function (e) {
	handleOutboundLinkClicks(e)
})