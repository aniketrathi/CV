import React, { Component } from "react";
import { Input, Form, FormFeedback, FormGroup, Button, Label, Col } from "reactstrap";

class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            contactno: '',
            address: '',
            skill: '',
            Achievements: '',
            Interest: '',
            school: '',
            schl1: '',
            clg: '',
            course: '',
            duration: '',
            org: '',
            startyear: '',
            cgpa: '',
            startyear1: '',
            cgpa1: '',
            startyear2: '',
            cgpa2: '',
            startyear3: '',
            touched: {
                name: false,
                email: false,
                contactno: false,
                startyear: false,
                cgpa: false,
                startyear1: false,
                cgpa1: false,
                startyear2: false,
                cgpa2: false,
                startyear3: false
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(name, email, contactno, startyear, cgpa, startyear1, cgpa1, startyear2, cgpa2, startyear3){
        const error = {
            name: '',
            email: '',
            contactno: '',
            startyear: '',
            cgpa: '',
            startyear1: '',
            cgpa1: '',
            startyear2: '',
            cgpa2: '',
            startyear3: ''
        }
        const reg_name = /^[a-z ,.'-]+$/i;
        if (this.state.touched.name && !reg_name.test(name))
            error.name = 'Name does not exist';
        else if (this.state.touched.name && name.length<7)
            error.name = 'name does not exist';
        const regs =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(this.state.touched.email && !regs.test(email))
            error.email = 'Invalid email'; 
        const reg = /^\d+$/;
        if (this.state.touched.contactno && !reg.test(contactno))
            error.contactno = 'Contact Number should contain only numbers';
        if(this.state.touched.startyear && startyear.length!=4)
            error.startyear = 'Invalid content';
        if(this.state.touched.cgpa && this.state.cgpa>10)
            error.cgpa = 'Invalid cgpa';
        else if(this.state.touched.cgpa && this.state.cgpa<0)
            error.cgpa = 'Invalid cgpa';
        if(this.state.touched.startyear1 && startyear1.length!=4)
            error.startyear1 = 'Invalid content';
        if(this.state.touched.cgpa1 && this.state.cgpa1>10)
            error.cgpa1 = 'Invalid cgpa';
        else if(this.state.touched.cgpa && this.state.cgpa1<0)
            error.cgpa1 = 'Invalid cgpa';
        if(this.state.touched.startyear2 && startyear2.length!=4)
            error.startyear2 = 'Invalid content';
        if(this.state.touched.cgpa2 && this.state.cgpa2>10)
            error.cgpa2 = 'Invalid cgpa';
        else if(this.state.touched.cgpa && this.state.cgpa2<0)
            error.cgpa2 = 'Invalid cgpa';
        if(this.state.touched.startyear3 && startyear3.length!=4)
            error.startyear3 = 'Invalid content';
        return error;
    }

    render(){
        const errors =  this.validate(this.state.name, this.state.email, this.state.contactno, this.state.startyear, this.state.cgpa, this.state.startyear1, this.state.cgpa1, this.state.startyear2, this.state.cgpa2, this.state.startyear3);
        return(
            <div className="container row-content">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label htmlFor="dp" md={2}>Profile Picture</Label>
                        <Col md={10}>
                            <Input type="file" name="dp" id="dp" accept="image/png, image/jpeg" />
                        </Col>
                        <Label htmlFor="name" md={2}>Name</Label>
                        <Col md={10}>
                            <Input type="text" name="name" id="name" placeholder="name"
                            value={this.state.name}
                            valid={this.state.touched.name && errors.name === ''}
                            invalid={errors.name !== ''}
                            onBlur={this.handleBlur('name')}
                            onChange={this.handleInputChange}
                            required />
                            <FormFeedback>{errors.name}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Input type="email" name="email" id="email" placeholder="email"
                            value={this.state.email}
                            valid={this.state.touched.email && errors.email === ''}
                            invalid={errors.email !== ''}
                            onBlur={this.handleBlur('email')}
                            onChange={this.handleInputChange}
                            required />
                            <FormFeedback>{errors.email}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="contactno" md={2}>Contactno</Label>
                        <Col md={10}>
                            <Input type="text" name="contactno" id="contactno" placeholder="contactno" 
                            value={this.state.contactno}
                            valid={this.state.touched.contactno && errors.contactno === ''}
                            invalid={errors.contactno !== ''}
                            onBlur={this.handleBlur('contactno')}
                            onChange={this.handleInputChange}
                            required />
                            <FormFeedback>{errors.contactno}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="address" md={2}>Address</Label>
                        <Col md={10}>
                            <Input type="textarea" name="address" id="address" placeholder="address" rows="3" 
                            onChange={this.handleInputChange}
                            required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="skill" md={2}>Skills</Label>
                        <Col md={10}>
                            <Input type="textarea" name="skill" id="skill" placeholder="enter your skills" rows="6" 
                            onChange={this.handleInputChange}
                            required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="Achievements" md={2}>Achievements</Label>
                        <Col md={10}>
                            <Input type="textarea" name="Achievements" id="Achievements" placeholder="Achievements/Certifications" rows="8" 
                            onChange={this.handleInputChange}
                            required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="Interest" md={2}>Interest</Label>
                        <Col md={10}>
                            <Input type="textarea" name="Interest" id="Interest" placeholder="Interest/Hobbies" rows="8" 
                            onChange={this.handleInputChange}
                            required />
                        </Col>
                    </FormGroup>
                    <Col md={2}>
                        <span>Education</span>
                    </Col>
                    <br></br>
                    <Col md={10}>
                        <span>Secondary Examination</span>
                    </Col>
                    <Col md={{size: 10, offset: 2}}>
                        <FormGroup row>
                            <Label htmlFor="startyear" md={2}>Startyear</Label>
                            <Col md={2}>
                                <Input type="text" name="startyear" id="startyear" placeholder="startingyear" 
                                value={this.state.startyear}
                                valid={this.state.touched.startyear && errors.startyear === ''}
                                invalid={errors.startyear !== ''}
                                onBlur={this.handleBlur('startyear')}
                                onChange={this.handleInputChange}
                                required />
                                <FormFeedback>{errors.startyear}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="cgpa" md={2}>CGPA</Label>
                            <Col md={2}>
                                <Input type="number" name="cgpa" id="cgpa" placeholder="enter cgpa" 
                                value={this.state.cgpa}
                                valid={this.state.touched.cgpa && errors.cgpa === ''}
                                invalid={errors.cgpa !== ''}
                                onBlur={this.handleBlur('cgpa')}
                                onChange={this.handleInputChange}
                                required />
                                <FormFeedback>{errors.cgpa}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="school" md={2}>School</Label>
                            <Col md={4}>
                                <Input type="text" name="school" id="school" placeholder="schoolname" 
                                onChange={this.handleInputChange}
                                required />
                            </Col> 
                        </FormGroup>
                    </Col>
                    <Col md={10}>
                        <span>Senior Secondary Examination</span>
                    </Col>
                    <Col md={{size: 10, offset: 2}}>
                        <FormGroup row>
                            <Label htmlFor="startyear1" md={2}>Startyear</Label>
                            <Col md={2}>
                                <Input type="text" name="startyear1" id="startyear1" placeholder="startingyear" 
                                value={this.state.startyear1}
                                valid={this.state.touched.startyear1 && errors.startyear1 === ''}
                                invalid={errors.startyear1 !== ''}
                                onBlur={this.handleBlur('startyear1')}
                                onChange={this.handleInputChange}
                                required />
                                <FormFeedback>{errors.startyear1}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="cgpa1" md={2}>CGPA</Label>
                            <Col md={2}>
                                <Input type="number" name="cgpa1" id="cgpa1" placeholder="enter cgpa" 
                                value={this.state.cgpa1}
                                valid={this.state.touched.cgpa1 && errors.cgpa1 === ''}
                                invalid={errors.cgpa1 !== ''}
                                onBlur={this.handleBlur('cgpa1')}
                                onChange={this.handleInputChange}
                                required />
                                <FormFeedback>{errors.cgpa1}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="schl1" md={2}>School</Label>
                            <Col md={4}>
                                <Input type="text" name="schl1" id="schl1" placeholder="schoolname"
                                onChange={this.handleInputChange}
                                required />
                            </Col> 
                        </FormGroup>
                    </Col>
                    <Col md={10}>
                            <span>Graduation</span>
                    </Col>
                    <Col md={{size: 10, offset: 2}}>
                        <FormGroup row>
                            <Label htmlFor="startyear2" md={2}>Startyear</Label>
                            <Col md={2}>
                                <Input type="text" name="startyear2" id="startyear2" placeholder="startingyear"
                                value={this.state.startyear2}
                                valid={this.state.touched.startyear2 && errors.startyear2 === ''}
                                invalid={errors.startyear2 !== ''}
                                onBlur={this.handleBlur('startyear2')}
                                onChange={this.handleInputChange}
                                required />
                                <FormFeedback>{errors.startyear2}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="cgpa2" md={2}>CGPA</Label>
                            <Col md={2}>
                                <Input type="number" name="cgpa2" id="cgpa2" placeholder="enter cgpa" 
                                value={this.state.cgpa2}
                                valid={this.state.touched.cgpa2 && errors.cgpa2 === ''}
                                invalid={errors.cgpa2 !== ''}
                                onBlur={this.handleBlur('cgpa2')}
                                onChange={this.handleInputChange}
                                required />
                                <FormFeedback>{errors.cgpa2}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="clg" md={2}>College</Label>
                            <Col md={4}>
                                <Input type="text" name="clg" id="clg" placeholder="collegename" 
                                onChange={this.handleInputChange}
                                required />
                            </Col> 
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="course" md={2}>Course</Label>
                            <Col md={2}>
                                <Input type="text" name="course" id="course" placeholder="course" 
                                onChange={this.handleInputChange}
                                required />
                            </Col> 
                        </FormGroup>
                    </Col>
                    <Col md={10}>
                        <span>Work Experience(Internship)</span>
                    </Col>
                    <Col md={{size: 10, offset: 2}}>
                        <FormGroup row>
                            <Label htmlFor="startyear3" md={2}>Startyear</Label>
                            <Col md={2}>
                                <Input type="text" name="startyear3" id="startyear3" placeholder="startingyear" 
                                value={this.state.startyear3}
                                valid={this.state.touched.startyear3 && errors.startyear3 === ''}
                                invalid={errors.startyear3 !== ''}
                                onBlur={this.handleBlur('startyear3')}
                                onChange={this.handleInputChange}
                                required />
                                <FormFeedback>{errors.startyear3}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="duration" md={2}>Duration</Label>
                            <Col md={2}>
                                <Input type="number" name="duration" id="duration" placeholder="enter duration"
                                onChange={this.handleInputChange}
                                required />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="org" md={2}>Organization</Label>
                            <Col md={4}>
                                <Input type="text" name="org" id="org" placeholder="organization name" 
                                onChange={this.handleInputChange}
                                required />
                            </Col> 
                        </FormGroup>
                    </Col>
                    <FormGroup row>
                        <Col md={{size: 10, offset: 2}}>
                            <Button type="submit" color="primary">
                                SUBMIT
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );

    }
}
export default Main;