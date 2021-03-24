import PropTypes from 'prop-types'

const styles = {
    color: "green",
};

const Panel = ({ title, children }) => (
    <div style={styles}>
    {title && <h2>{title}</h2>}
        {children}
    </div>)

Panel.defaultProps = {
    title: "",
    children: [  ]
    }

Panel.propTypes = {
    title: PropTypes.string,
children: PropTypes.node,}
export default Panel