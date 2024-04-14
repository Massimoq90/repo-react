import Card from 'react-bootstrap/Card';

const WithHeaderAndQuoteExample = () => {
    return (
        <Card className='bg bg-dark footer-box'>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.{' '}
                    </p>
                    <footer className="blockquote-footer">
                       sono il footer <cite title="Source Title"></cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default WithHeaderAndQuoteExample;