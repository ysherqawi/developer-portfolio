import { skillsPageImg } from '../../../assets/imgUrl';

export const SkillsStyle = {
  layout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alighnItems: 'center',
    margin: 'auto',
  },

  backgroundimg: {
    backgroundImage: `url(${skillsPageImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '175px',
    width: '450px',
  },
  card: {
    minHeight: '295px',
    minWidth: '250px',
    marginBottom: '0',
  },
  icon: {
    width: '25px',
    height: '25px',
  },
  cursor: {
    cursor: 'pointer',
  },
};
