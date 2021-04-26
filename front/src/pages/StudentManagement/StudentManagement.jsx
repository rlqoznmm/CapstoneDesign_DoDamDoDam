import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import styled from 'styled-components';
import MyChart from '@/components/common/Graph'
//import MyChart from '../../components/common/Graph'

const StudentManagement = () => {

  return (
    <PageLayout>
      <Wrapper>
        <List>
            학생 목록
        </List>
        <Detail>
            <Calendar>
                달력
            </Calendar>
            <Graph>
                차트
                <MyChart/>
            </Graph>
        </Detail>
      </Wrapper>
    </PageLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const List = styled.div`
  margin-right:auto;
  background-color:red;
`;
const Detail = styled.div`
  margin-left:auto;
`;
const Calendar = styled.div`
`;
const Graph = styled.div`
`;
export default StudentManagement;
