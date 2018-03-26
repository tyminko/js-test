/**
 * maxim tyminko 26.03.18.
 * maximtyminko.com
 */
(function(){
	const canvas = document.getElementsByTagName('canvas')[0]
	const ctx = canvas.getContext('2d')
	var allowDraw = false
	var drawingStarted = false
	var lastBrushPosition = {x:0,y:0}
	const angle360 = Math.PI * 2
	
	ctx.lineWidth = 16
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
	
	canvas.addEventListener('mousedown', function(e){
		allowDraw = true
	})
	canvas.addEventListener('mousemove', draw)
	canvas.addEventListener('mouseup', function(){
		allowDraw = false
		drawingStarted = false
	})
	
	/**
	 * @param {MouseEvent} e
	 */
	function draw(e){
		if(allowDraw){
			
			if(! drawingStarted){
				ctx.moveTo(e.clientX, e.clientY)
				ctx.beginPath()
				drawingStarted = true
			}
			
			const x = e.clientX
			const y = e.clientY
			ctx.lineWidth = 16
			ctx.strokeStyle = 'rgba(0,0,0,0.05)'
			ctx.lineJoin="round";
			ctx.lineTo(x, y)
			ctx.stroke()
		}
	}
})()