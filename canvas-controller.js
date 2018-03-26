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
		ctx.moveTo(e.clientX, e.clientY)
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
			const x = e.clientX
			const y = e.clientY
			// ctx.beginPath()
			ctx.lineWidth = 16
			ctx.lineJoin="round";
			ctx.lineTo(x, y)
			ctx.stroke()
			// lastBrushPosition.x = x
			// lastBrushPosition.y = y
		}
	}
})()