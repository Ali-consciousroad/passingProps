// Add a firstName prop and lastName prop to the props object when using this component
function Heading(props) {
    return (
        <h1>Hello {props.firstName} {props.lastName}</h1>
    )
}

export default Heading;
