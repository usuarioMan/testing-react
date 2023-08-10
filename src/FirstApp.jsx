import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {
  return (
    <div className="first-app-container">
      <h1 className="first-app-title">{title}</h1>
      <p className="first-app-subtitle">{subTitle}</p>
      <p className="first-app-name">{name}</p>
    </div>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    name: PropTypes.string
}

