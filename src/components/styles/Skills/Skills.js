import SkillsImage from '../../../assets/skills.gif';

export const SkillsStyle = {
  layout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 'auto',
  },

  backgroundimg: {
    backgroundImage: `url(${SkillsImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',
    width: '512px',
  },
  card: {
    minHeight: '300px',
    minWidth: '260px',
  },
  icon: {
    width: '25px',
    height: '25px',
  },
  cursor: {
    cursor: 'pointer',
  },
};
