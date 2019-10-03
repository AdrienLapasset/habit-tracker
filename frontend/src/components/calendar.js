var today = new Date();
var startDate = new Date('2019-09-25');
const diffTime = Math.abs(today - startDate);
const daySinceStart = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

Date.prototype.addDays = function(d) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + d);
	return date;
};

var days = [];
while (startDate <= today) {
	let curentDay = new Date(startDate);
	days.push(`${curentDay.getDate()} / ${curentDay.getMonth() + 1}`);
	startDate = startDate.addDays(1);
}

{
	/* <div className="Table" style={{ gridTemplateColumns: `repeat(${daySinceStart + 2}, 1fr)` }}> */
}

{
	/* <div className="habits__item">jeune 16h</div>
				<div className="habits__item">jeune 24h</div>
				<div className="habits__item">jeune 48h</div>
				<div className="habits__item">sport</div>
				<div className="habits__item">420</div>
				<div className="habits__item">coucher tôt</div> */
}
