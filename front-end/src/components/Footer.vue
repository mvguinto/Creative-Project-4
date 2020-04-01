<template>
<div class="footer">
	<div class="footer-info">
		<a href="https://github.com/mvguinto/Creative-Project-3">GitHub</a>
		<img src="/Star-Spacer.png">
		<p>By: Maleah Guinto and Derek Hensley</p>
	</div>
	<p class='note'>* Sources listed under each recipe page.</p>
</div>
</template>

<style scoped>
.footer {
	position: absolute;
	width: 100%;
	height: 60px;
	bottom: 0;
	background-color: #633417;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	font-size: 15px;
	color: #f2ebc9;
	left: 0px;
}

.footer-info {
	padding: 5px 0px 0px 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}

.note {
	font-size: 15px;
	margin: 0;
}

.footer a:visited {
	color: #F2D8A7;
}

.footer p {
	padding-left: 15px;
	padding-top: 0px;
	margin: 0px;
}

.footer a:link {
	color: #f2ebc9;
}

.footer img {
	margin-top: 0px;
	width: auto;
	height: 30px;
	padding-left: 13px;
	border: 0px;
}

.spacer {
	padding: 45px;
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
	.footer {
		font-size: 20px;
	}
}
</style>
