import { Project } from '@/types/project';

const projects: Project[] = [
  {
    title: 'SIT Timetable Grabber Extension',
    description: 'A browser extension that helps students at the Singapore Institute of Technology (SIT) to easily export their timetable to iCalendar format.',
    date: '2024-10-01',
    website: 'https://chrome.google.com/webstore/detail/sit-timetable-grabber/cnffedmfildfgejcckjcmhabbdkpcibh',
    github: 'https://github.com/ekiost/SIT-Timetable-Grabber-Extension',
    tags: [{ label: 'TypeScript' }, { label: 'Chrome Extension' }, { label: 'React' }]
  },
  {
    title: 'RFID Lab Equipment Tracker',
    description: 'A web application that helps manage lab equipment using RFID technology with MQTT, Next.js, ASP.NET Core, and PostgresSQL. This project is developed for the Singapore Institute of Technology (SIT) as part of the Integrated Team Project (ITP).',
    date: '2024-10-02',
    tags: [{ label: 'TypeScript' }, { label: 'Next.js' }, { label: 'ASP.NET Core' }, { label: 'PostgresSQL' }, { label: 'Embedded Systems' }, { label: 'RFID' }, { label: 'IoT' }, { label: 'Embedded Systems' }, { label: 'MQTT' }]
  },
  {
    title: 'IWSP Telegram Bot',
    description: 'A Telegram bot that notifies latest IWSP postings from SIT\'s IWSP portal.',
    date: '2024-10-01',
    github: 'https://github.com/ekiost/iwsp_bot',
    tags: [{ label: 'Python' }, { label: 'Telegram Bot' }]
  },
  {
    title: 'Nix Config',
    description: 'My NixOS configuration files for my MacBook',
    date: '2024-10-01',
    github: 'https://github.com/ekiost/nix',
    tags: [{ label: 'NixOS' }]
  }
];

export { projects };
