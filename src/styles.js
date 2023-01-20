const styles = {
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right:0,
        bottom:0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        padding: 20,
        zIndex: 2,
        width: "90%",
        height: "90%"
    },
}

export default styles;