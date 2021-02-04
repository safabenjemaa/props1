import React from 'react';
import {Button} from 'react-bootstrap';
import proptypes from 'prop-types'; 

const Profilecomponent=({fullname , bio , profession , children ,Name}) => {
    return (
        <div> 
             {children}
            <h1 style={{color:'rgb(75, 31, 31)'}}>{fullname}</h1>
            <h2 style={{color:'rgb(99, 47, 47)'}}> I'am {bio}</h2>
            <h3 style={{color:'rgb(148, 66, 66)'}}>I'm a {profession}</h3>
           

            <Button style={{color:'grey',backgroundColor:'black',width:180}} variant="primary" onClick={Name}> Add </Button>
       
        </div>

    );
}
 Profilecomponent.defaultProps={
     fullname:'foulen' ,bio:'student',profession:'not yet',Name:'foulen',children:<p></p>
 }
Profilecomponent.propTypes={
 fullname:proptypes.string,bio : proptypes.string,profession : proptypes.string , Name : proptypes.string

 }
export default Profilecomponent;