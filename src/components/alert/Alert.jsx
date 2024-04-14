import Alert from 'react-bootstrap/Alert';

const BasicExample = () => {
    return (
        <>
            {[
                'danger',
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    Attenzione questo è un alert !
                </Alert>
            ))}
        </>
    );
}

export default BasicExample;