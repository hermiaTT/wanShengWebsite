import React from 'react'
import Feature from '../../components/feature/feature';
import scott from '../../assets/scott.png';
import zee from '../../assets/zee.png';
import mario from '../../assets/mario.png';
import momo from '../../assets/momo.png';
import './team.css';

const teamData = [
  {
    title: '高级工程师',
    img: zee,
    text: '丰富室内装修经验 让你更省心.',
  },
  {
    title: '资深工程师',
    img: scott,
    text: '丰富商业工程经验 让你更放心',
  },
  {
    title: '设计总监',
    img:mario,
    text: '专业设计团队，丰富设计经验',
  },
  {
    title: '设计总监',
    img: momo,
    text: '从业25年，实战经验丰富',
  },
];

const Team = () => {
  return (
    <div className="ws__team section__padding" id="team">
    <div className="ws__team-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Contact Us to Get Early Started</p>
    </div>
    <div className="ws__team-container">
      {teamData.map((item, index) => (
        <Feature title={item.title} text={item.text} img = {item.img} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Team