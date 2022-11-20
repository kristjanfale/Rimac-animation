// gsap.registerPlugin(ScrollTrigger)
let section = 1;
let canScroll = true;

const onScroll = (e) => {
	// console.log(e.deltaY)
	// Scroll down
	if (e.deltaY > 0) {
		gsap.to(`#section_${section}`, {
			yPercent : -70, scale: 0.6, zIndex: '10', ease: "power4", duration: 1,
		})
	
		let tl = gsap.timeline({});
		tl.to(`#section_${section + 1 > 4  ? section - 4 + 1 : section + 1 }`, {
			yPercent : 0, scale: 0.6, zIndex: '100', ease: "power4", duration: 0.6, delay: 0.2
		})
		tl.to(`#section_${section + 1 > 4  ? section - 4 + 1 : section + 1 }`, {
			scale: 1, ease: "power4", duration: 0.6,
		})
		
		gsap.to(`#section_${section + 2 > 4  ? section - 4 + 2 : section + 2 }`, {
			yPercent : 80, scale: 0.6, zIndex: '10', ease: "power4", duration: 1, delay: 0.1
		})
		gsap.to(`#section_${section + 3 > 4  ? section - 4 + 3 : section + 3 }`, {
			yPercent : 0, scale: 0.3, zIndex: '10', ease: "power4", duration: 1, delay: 0.1
		})
	
		if (section === 4) {
			section = 1; 
		} else {
			section += 1; 
		}
	} else {  // Scroll up
		console.log(section);
		gsap.to(`#section_${section}`, {
			yPercent : 70, scale: 0.6, zIndex: '10', ease: "power4", duration: 1,
		})
	
		let tl = gsap.timeline({});
		tl.to(`#section_${section + 3 > 4  ? section - 4 + 3 : section + 3 }`, {
			yPercent : 0, scale: 0.6, zIndex: '100', ease: "power4", duration: 1, delay: 0.1
		})
		tl.to(`#section_${section + 3 > 4  ? section - 4 + 3 : section + 3 }`, {
			scale: 1, ease: "power4", duration: 1,
		})
		
		gsap.to(`#section_${section + 2 > 4  ? section - 4 + 2 : section + 2 }`, {
			yPercent : -80, scale: 0.6, zIndex: '10', ease: "power4", duration: 1, delay: 0.1
		})
		gsap.to(`#section_${section + 1 > 4  ? section - 4 + 1 : section + 1 }`, {
			yPercent : 0, scale: 0.3, zIndex: '10', ease: "power4", duration: 1, delay: 0.1
		})
	
		if (section === 1) {
			section = 4; 
		} else {
			section -= 1; 
		}
		
	}
}

window.addEventListener("wheel", (e) => onScroll(e) );

window.onload = () => {
	gsap.to(`#section_${section}`, {
        yPercent : 0, scale: 1, zIndex: '100', ease: "power4",
    })
	gsap.to(`#section_${section+1}`, {
        yPercent : 70, scale: 0.6, zIndex: '10', ease: "power4",
    })
	gsap.to(`#section_${section+2}`, {
        yPercent : 0, scale: 0.3, zIndex: '10', ease: "power4",
    })
	gsap.to(`#section_${section+3}`, {
        yPercent : -70, scale: 0.6, zIndex: '10', ease: "power4",
    })
}