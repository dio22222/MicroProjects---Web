document.addEventListener('DOMContentLoaded', () => {
	const $nav = document.querySelector("nav")
	const $nav_toggle = document.querySelector("#nav-toggle");
	const $nav_link = document.querySelectorAll("#nav-link");

	$nav_toggle.addEventListener('click', (e) => {
		if ($nav.classList.contains('active')){
			$nav.classList.remove("active");
		}
		else {
			$nav.classList.add("active");
		}
		$nav_link.forEach($nav_link => {
			if ($nav_link.classList.contains('active')){
			$nav_link.classList.remove("active");
			$nav_link.classList.add("deactivate");
			}
			else {
				$nav_link.classList.remove("deactivate");
				$nav_link.classList.add("active");
			};
		});
	});
});