/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useEffect, useState} from "react";
import { Doughnut } from 'react-chartjs-2';

// reactstrap components

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";

// index page sections
import SampleHero from "../IndexSections/SampleHero";
import Calendar from "../../components/Calendar/Calendar";
import SimpleModal from "../../components/Student/Dialog/SimpleModal";
import ReactWordcloud from 'react-wordcloud';
import service from '../../service';

import '../../assets/scss/react/stuPage/stuPageStyle.scss'

const StudentPage = ({title}) => {
  // componentDidMount() {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.main.scrollTop = 0;
  // }

    let wordList = [{
        text: 'told',
        value: 64,
    },
        {
            text: 'mistake',
            value: 11,
        },
        {
            text: 'thought',
            value: 16,
        },
        {
            text: 'bad',
            value: 17,
        },];


    const data = {
        labels: ['GOOD', 'BAD'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const [words, setWords] = useState([]);
    const getAllWords = async () => {
        const { data: AllWords } = await service.getWords(
            window.localStorage.getItem('teacher_id')
        );
        AllWords.map((word) => {
            wordList.push({ text: word.word, value: word.frequency });
        });
        console.log(wordList);
        setWords(words.concat(wordList));
    };

    useEffect(() => {
        getAllWords();
        console.log(words);
    }, []);
//
  return (
    <>
      <MainNavbar />


        <SampleHero headerStyle={3} />

        <div className="topItemsBox">
            <div className="word-cloud">
                <p className="title">{title}</p>
                <ReactWordcloud
                    words={wordList} size={[300,300]} />
            </div>
            <div className='inChart'>
                <p style={{textAlign:'center'}}> 한달동안 감정적 비율</p>
                <Doughnut data={data}/>
            </div>
        </div>
        <div className='inCalender'>
            <Calendar/>
        </div>

        <SimpleModal/>

      <UserFooter />
    </>
  );
};

StudentPage.defaultProps = {
    title: '친구들이 요즘 관심있는 것은?',
};

export default StudentPage;
