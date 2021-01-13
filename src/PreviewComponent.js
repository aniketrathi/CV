import React from "react";
import {Container, Row, Col} from 'reactstrap';

const Preview = ({obj,fun}) => {
    return (
        <Container><br/>
			<Row>
				<Col md={4} className="flexit">
					<img id="profileimg" src={URL.createObjectURL(obj.dp)} alt="Profile Image" />
				</Col>
				<Col md={8} className="flexit">
					<h1 className="display-3">{obj.name}</h1>
					<span className="fontinc">{obj.email}</span>
					<span className="fontinc">{obj.contactno}</span>
					<small>{obj.address}</small>
				</Col>
			</Row>
			<br /><br />
			<Row>
				<Col md={4} className="flexit">
					<h2>Skills</h2>
				</Col>
				<Col md={8}>
					<span className="fontinc">{obj.skill}</span>
				</Col>
			</Row>
			<br/><br/>
			<Row>
				<Col md={4} className="flexit">
					<h2>Achievements</h2>
				</Col>
				<Col md={8}>
					<span className="fontinc">{obj.Achievements}</span>
				</Col>
			</Row>
			<br/><br/>
			<Row>
				<Col md={4} className="flexit">
					<h2>Education</h2>
				</Col>
				<Col md={8}>
					<h4>Secondary Education</h4>
					<Row><span className="fontinc"><b>School:</b> {obj.school}</span></Row>
					<Row><span className="fontinc"><b>Start Year:</b> {obj.startyear}</span></Row>
					<Row><span className="fontinc"><b>CGPA:</b> {obj.cgpa}</span></Row>
					<br/>
					<h4>Senior Secondary Education</h4>
					<Row><span className="fontinc"><b>School:</b> {obj.schl1}</span></Row>
					<Row><span className="fontinc"><b>Start Year:</b> {obj.startyear1}</span></Row>
					<Row><span className="fontinc"><b>CGPA:</b> {obj.cgpa1}</span></Row>
					<br/>
					<h4>College Education</h4>
					<Row><span className="fontinc"><b>College:</b> {obj.clg}</span></Row>
					<Row><span className="fontinc"><b>Course:</b> {obj.course}</span></Row>
					<Row><span className="fontinc"><b>Start Year:</b> {obj.startyear2}</span></Row>
					<Row><span className="fontinc"><b>CGPA:</b> {obj.cgpa2}</span></Row>
				</Col>
			</Row>
			<br/><br/>
			<Row>
				<Col md={4} className="flexit">
					<h2>Work Experience</h2>
				</Col>
				<Col md={8}>
					<Row><span className="fontinc"><b>Organization:</b> {obj.org}</span></Row>
					<Row><span className="fontinc"><b>Start Year:</b> {obj.startyear3}</span></Row>
					<Row><span className="fontinc"><b>Duration:</b> {obj.duration}</span></Row>
				</Col>
			</Row>
			<br /><br />
			<Row>
				<Col md={4} className="flexit">
					<h2>Interests</h2>
				</Col>
				<Col md={8}>
					<span className="fontinc">{obj.Interest}</span>
				</Col>
			</Row>
			<br/>
			<button className="btn btn-primary editbtn" onClick={() => fun()}> &nbsp;Edit &nbsp;</button>
			<br />
			<br />
		</Container>
    );
}

export default Preview;