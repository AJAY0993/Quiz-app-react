function Button({ children, className = "compo-button", borderColor = "black", boxShadow, background = "transparent", borderRadius = ".5em", onClickHandler }) {
    const styles = {
        padding: ".5em 1em",
        borer: "none",
        boxShadow: boxShadow,
        borderRadius: borderRadius,
        cursor: "pointer"
    }
    return (
        <button className={className} style={styles} onClick={onClickHandler}>{children}</button>
    )
}

export default Button
