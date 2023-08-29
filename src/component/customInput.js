import PropTypes from "prop-types"

export const Input = ({ type, className, placeholder, onChange, value }) => {

    return (
        <>
            <input
                className={ className }
                placeholder={ placeholder }
                type={ type }
                onChange={ onChange }
                value={ value }
            />
        </>
    )
}


Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
}