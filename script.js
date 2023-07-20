//complete this code
class Rectangle {
	constructor(width, height){
		this._width= width
		this._height=height
	}
	get width(){
		return this._width
	}
	get height(){
		return this._height
	}
	getArea(){
		let area = this._width*this._height
		return area
	}
}

class Square extends Rectangle {
	constructor(sq_s){
		this.sq_s = sq_s
	}
	getPerimeter(){
		return 2*(this.sq_s+this.sq_s)
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
