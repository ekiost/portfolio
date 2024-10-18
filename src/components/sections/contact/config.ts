import { Contact } from '@/types/contact';
import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'choonkeatling@icloud.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/ekiost',
      Icon: SiGithub
    },
    {
      name: 'Linkedin',
      href: 'https://linkedin.com/in/choonkeatling',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
