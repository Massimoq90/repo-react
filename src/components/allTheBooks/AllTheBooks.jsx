import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import horrorBooks from '../../dataBooks/books/horror.json';
import SingolBook from '../singolBook/MySingolBook';

const AllTheBooks = () => {
    return (


        <Container>
            <Row className='pt-5 '>
                {horrorBooks.map((book, index) => (
                    <Col key={`singolbook-${index}`} xs={12} md={4} lg={3}>
                        <SingolBook

                            title={book.title}
                            img={book.img}
                            price={book.price}
                            category={book.category}
                            asin={book.asin}
                        />
                    </Col>
                ))}
            </Row>
        </Container>

    )
}

export default AllTheBooks;