import { Skill } from '@/types/skill';

const trimLen: number = -1; // 0 is accordion only, -1 it does not restrict the length

const skills: Skill[] = [
  {
    name: 'Web Development',
    description: `Web Development using HTML, CSS, JavaScript, React, and ASP.NET. Notable project: Developed a Chrome extension for extracting timetables from the school website, achieving a 4-star rating and over 1000 active users. This demonstrates proficiency in browser extension development and user-centric design.`
  },
  {
    name: 'Data Analysis and Automation',
    description: `Data analysis and automation using Python and VBA. Notable project: Developed a Python telegram bot to automate the collection of new job postings, demonstrating proficiency in data analysis and automation.`
  },
  {
    name: 'Embedded Systems and IoT',
    description: `Embedded systems development using MQTT and C#. Notable project: Developed an IoT system for tracking lab resources with RFID, demonstrating proficiency in embedded systems and IoT.`
  },
  {
    name: 'Robotics and Autonomous Systems',
    description: `Experience with robotics and autonomous systems, including ROS (Robot Operating System). Achievement: Led the programming efforts for an autonomous drone using ROS in the Singapore Amazing Flying Machine Competition, demonstrating leadership and advanced programming abilities in robotics.`
  }
];

export { trimLen, skills };
