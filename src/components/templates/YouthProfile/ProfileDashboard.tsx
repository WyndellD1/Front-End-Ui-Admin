import styled from 'styled-components';
import { theme } from '../../../config';
import { Divider } from '@mui/material';
import { ReactNode } from 'react';


const Container = styled.div`
 display: flex;
  margin-top: -32.2em;
  margin-left: 30em;
  height: 28em;
  width: 45em;
  position: absolute;
  background:white;
  border-radius: 10px;
  margin-bottom: 10% ;
  box-shadow:1px 2px 7px #ebebeb;
  padding:30px;
  display: inline-block;
  overflow-y: scroll;
  overflow-x: hidden;
  @media ${theme.breakpoints.mobileAndTablet} {
    margin-top: -20em;
  margin-left: -2em;
  background:none;
    box-shadow:none;
    width: 88%;
    height: 95em;
    overflow-y: hidden; }
`;
const CouncilInformationHelperText = styled.div`
  font: normal normal bold 20px/29px Montserrat;
  color: #8b8bf8;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const CouncilInformationHeaderText = styled.div`
  font: normal normal bold 24px/35px Montserrat;
  width: 100%;
`;
const SubHeader = styled.div`
  font: normal normal bold 15px/20px Montserrat;
  color: #05050a;
  margin-right: 10em;
  @media ${theme.breakpoints.mobileAndTablet} {
    margin-right: 6em; }
`;
const SubTitle = styled.div`
  font: normal normal normal 14px/20px Montserrat;
  color: #05050a;
  margin-bottom: 3px;
  @media ${theme.breakpoints.mobileAndTablet} {
    margin-bottom: 20px; }
`;
type Person = {
  Name: string
  Sitio: string
  SoloParent: string
  BdayAge: string
  Religion: string
  No_Fam: number
  Gender: string
  CivilStatus: string
  No_Siblings: number
  EducationStatus: string
  YearGraduated: number
  BoardPasser: string
  Course: string
  Employment: string
  Sector: string
  Vaccines: string
  PDW: string
  HealthCertificate: string
  RegisteredVoter: string
  Sports: string
  Varsity: string
  Residency: string
  DisasterLicenses: string
  CName: string
  Relationship: string
  ContactNumber: number
  CAddress: string
}
  const defaultData: Person[] = [
    {
      Name: 'Barral, Christian',
      Sitio: 'Sidlakan',
      SoloParent: 'No',
      BdayAge: 'Month 00,1995-26',
      Religion: 'Roman Catholic',
      No_Fam:4,
      Gender: 'Male',
      CivilStatus: 'Single',
      No_Siblings: 2,
      EducationStatus: 'Graduate',
      YearGraduated:2017,
      BoardPasser:'No',
      Course:'Information Technology',
      Employment:'Working',
      Sector:'Private Company',
      Vaccines:'Polio Vaccine',
      PDW:'No',
      HealthCertificate:'Lorem ipsum,Lorem ipsum',
      RegisteredVoter:'Yes',
      Sports:'Volleyball, Chess',
      Varsity:'No',
      Residency:'Permanent',
      DisasterLicenses:'None',
      CName:'Lorem ipsum',
      Relationship: 'Lorem ipsum',
      ContactNumber:9000000000,
      CAddress:'Barangay Tisa'
    }
  ]
export type Props = {}
const Component = ({  }: Props) => {
return (
  <Container>
    <CouncilInformationHeaderText>PROFILE
      <Divider />
    </CouncilInformationHeaderText> 
   <CouncilInformationHelperText>Personal Information</CouncilInformationHelperText>
          <table>
          <tr>
          <th> <SubHeader>Name(Last,First)</SubHeader></th>
          <th><SubHeader>Sitio</SubHeader></th>
          <th><SubHeader>Solo Parent</SubHeader></th>
        </tr> 
        {defaultData.map((item: {
          [x: string]: ReactNode; Name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; 
}, i: React.Key | null | undefined) => (
          <><tr key={i}>
          <td><SubTitle>{item.Name}</SubTitle></td>
          <td><SubTitle>{item.Sitio}</SubTitle></td>
          <td><SubTitle>{item.SoloParent}</SubTitle></td>
        </tr>
        </> ))} 
        </table>
        <table>
        <tr>
          <td><SubHeader>Birthday&Age</SubHeader></td>
          <td><SubHeader>Religion</SubHeader></td>
          <td><SubHeader>No.of FamilyMembers</SubHeader></td>
        </tr>
        {defaultData.map((item: {
          [x: string]: ReactNode; BdayAge: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; 
}, i: React.Key | null | undefined) => (
          <><tr key={i}>
          <td><SubTitle>{item.BdayAge}</SubTitle></td>
          <td><SubTitle>{item.Religion}</SubTitle></td>
          <td><SubTitle>{item.No_Fam}</SubTitle></td>
        </tr>
        </> ))}
        </table>
        <table>
        <tr>
          <td> <SubHeader>Gender</SubHeader></td>
          <td><SubHeader>Civil Status</SubHeader></td>
          <td><SubHeader>No. of Siblings</SubHeader></td>
        </tr>
        {defaultData.map((item: {
          [x: string]: ReactNode; Gender: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; 
}, i: React.Key | null | undefined) => (
          <><tr key={i}>
          <td><SubTitle>{item.Gender}</SubTitle></td>
          <td><SubTitle>{item.CivilStatus}</SubTitle></td>
          <td><SubTitle>{item.No_Siblings}</SubTitle></td>
        </tr>
        </> ))}
       </table>
     <Divider />  
     <CouncilInformationHelperText>Educational Background</CouncilInformationHelperText>    
     <table>
          <tr>
          <th> <SubHeader>Education Status</SubHeader></th>
          <th><SubHeader>Year Graduated</SubHeader></th>
          <th><SubHeader>Board Passer</SubHeader></th>
        </tr>
        {defaultData.map((item: {
          [x: string]: ReactNode; EducationStatus: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; 
}, i: React.Key | null | undefined) => (
          <><tr key={i}>
          <td><SubTitle>{item.EducationStatus}</SubTitle></td>
          <td><SubTitle>{item.YearGraduated}</SubTitle></td>
          <td><SubTitle>{item.BoardPasser}</SubTitle></td>
        </tr>
        <tr>
          <td><SubHeader>Course</SubHeader></td>
        </tr>
        <tr>
          <td><SubTitle>{item.Course}</SubTitle></td>
        </tr> </> ))}
       </table>
       <Divider />  
     <CouncilInformationHelperText>Employment</CouncilInformationHelperText>    
     <table>
          <tr>
          <th> <SubHeader>Employment Status</SubHeader></th>
          <th><SubHeader>Employment Sector</SubHeader></th>
        </tr>
        {defaultData.map((item: {
          [x: string]: ReactNode; Employment: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; 
}, i: React.Key | null | undefined) => (
          <><tr key={i}>
          <td><SubTitle>{item.Employment}</SubTitle></td>
          <td><SubTitle>{item.Sector}</SubTitle></td>
        </tr>
        </> ))}
        </table>
        <Divider />  
     <CouncilInformationHelperText>Health Declaration & Conditions</CouncilInformationHelperText>
     <table>
          <tr>
          <th> <SubHeader>Vaccines Taken</SubHeader></th>
          <th><SubHeader>Are you PDW?</SubHeader></th>
          <th><SubHeader>PDW Health Certificate & Licenses</SubHeader></th>
        </tr>
        {defaultData.map((item: {
          [x: string]: ReactNode; Vaccines: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; 
}, i: React.Key | null | undefined) => (
          <><tr key={i}>
          <td><SubTitle>{item.Vaccines}</SubTitle></td>
          <td><SubTitle>{item.PDW}</SubTitle></td>
          <td><SubTitle>{item.HealthCertificate}</SubTitle></td>
        </tr>
        </> ))}
        </table>
     <Divider />  
     <CouncilInformationHelperText>Other Information</CouncilInformationHelperText>    
     <table>
          <tr>
          <th><SubHeader>Tisa Registered Voter</SubHeader></th>
          <th><SubHeader>Sports you play</SubHeader></th>
          <th><SubHeader>Varsity Player</SubHeader></th>
        </tr>
        {defaultData.map((item: {
          [x: string]: ReactNode; RegisteredVoter: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; 
}, i: React.Key | null | undefined) => (
          <><tr key={i}>
          <td><SubTitle>{item.RegisteredVoter}</SubTitle></td>
          <td><SubTitle>{item.Sports}</SubTitle></td>
          <td><SubTitle>{item.Varsity}</SubTitle></td>
        </tr>
        <tr>
          <td><SubHeader>Residency</SubHeader></td>
        </tr>
        <tr>
        <td><SubTitle>{item.Residency}</SubTitle></td>
        </tr>
        <tr>
          <td><SubHeader>Disaster Licenses/Certifications</SubHeader></td>
        </tr>
        <tr>
        <td><SubTitle>{item.DisasterLicenses}</SubTitle></td>
        </tr> </> ))}
        </table>
        <Divider />  
     <CouncilInformationHelperText>Emergency Contact</CouncilInformationHelperText>    
     <table>
          <tr>
          <th><SubHeader>Name</SubHeader></th>
          <th><SubHeader>Relationship</SubHeader></th>
          <th><SubHeader>Contact Number</SubHeader></th>
        </tr>
        {defaultData.map((item: {
          [x: string]: ReactNode; CName: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; 
}, i: React.Key | null | undefined) => (
          <><tr key={i}>
          <td><SubTitle>{item.CName}</SubTitle></td>
          <td><SubTitle>{item.Relationship}</SubTitle></td>
          <td><SubTitle>{item.ContactNumber}</SubTitle></td>
        </tr>
        <tr>
          <td><SubHeader>Address</SubHeader></td>
        </tr>
        <tr>
        <td><SubTitle>{item.CAddress}</SubTitle></td>
        </tr>
       </> ))}
        </table>
  </Container>
  );
};
export default Component;