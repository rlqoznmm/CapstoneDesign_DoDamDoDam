import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiBell}  from "react-icons/bi";

const Header=()=>{
    return (
       <Component>
           <Logo src="https://i.ibb.co/LkJhyKK/image.png"/>
           <ClassButton type='button'>
             <Link to='/classManagement'>학급관리</Link>
           </ClassButton>
           <StudentButton type='button'>
             <Link to='/studentManagement'>학생관리</Link>
           </StudentButton>
           <EnrollmentButton type='button'>
             <Link to='/studentEnrollment'>학생등록</Link>
           </EnrollmentButton>
           <Information>
             <Bell>
               <BiBell size={25}/>
             </Bell>
             <People>
                사람사진
             </People>
           </Information>
       </Component>
    );
}
const Component = styled.header`
  width: 100%;
  height: 100px;
  min-height: 100px;
  position: relative;
  display: flex;
  background-color: #FFD569;
`;
const ClassButton=styled.button`
  color: black;
  border: transparent;
  border-radius: 4px;
  background-color: transparent;
  text-decoration: none;
  margin-left:30px;

`;
const StudentButton=styled.button`
  color: black;
  border: transparent;
  background-color: transparent;
  margin-left:30px;
  border-radius: 4px;

`;
const EnrollmentButton=styled.button`
  color: black;
  border: transparent;
  border-radius: 4px;
  background-color: transparent;
  margin-left:30px;

`;
const Logo = styled.img`
  margin-left:15px;
`;
const Bell = styled.button`
  color: black;
  
`;
const People=styled.div`
  margin-right:35px;

`;
const Information = styled.div`
  display: flex;
  margin: auto 0;
  margin-left : auto;
`;
export default Header;