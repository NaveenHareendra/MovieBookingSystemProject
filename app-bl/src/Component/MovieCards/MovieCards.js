import React from 'react'
import { Card, Container,Row ,Col} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import img5 from '../../assets/Images/img5.jpeg'
import img6 from '../../assets/Images/img6.jpeg'
import img7 from '../../assets/Images/img7.jpeg'
import img8 from '../../assets/Images/img8.jpeg'

export default function MovieCards() {
  return (
    <div>
       <Container data-aos="fade-up">
				<Row style={{ paddingLeft: "100px" }}>
					<div className="col-md-3 ">
						<Card style={{ width: "16rem" }} className="card-set">
							<Card.Img className='card-img' variant="top" src={img5} />

							<Card.Body>
								<Card.Title>
									<b>Movie Name</b>
                                    <p>xxxxxx</p>
                                    
                                    
								</Card.Title>

                <Button variant="success" className="card-button" href="/Trading">Book My Show</Button>

								<br></br>
								<br></br>
							</Card.Body>
						</Card>
					</div>

					<div className="col-md-3 ">
						<Card style={{ width: "16rem" }} className="card-set">
							<Card.Img variant="top" className='card-img'  src={img6} style={{}} />
							<Card.Body>
								<Card.Title>
                                <b>Movie Name</b>
                                    <p>xxxxxx</p>
								</Card.Title>

                <Button variant="success" className="card-button" href="/Lesure">Book My Show</Button>
							
								<br></br>
								<br></br>
							</Card.Body>
						</Card>
					</div>

					<div className="col-md-3 ">
						<Card style={{ width: "16rem" }} className="card-set">
							<Card.Img variant="top" className='card-img'  src={img7} />
							<Card.Body>
								<Card.Title>
                                <b>Movie Name</b>
                                    <p>xxxxxx</p>
								</Card.Title>

                <Button variant="success" className="card-button" href="/Partnership">Book My Show</Button>
								<br></br>
								<br></br>
							</Card.Body>
						</Card>
					</div>

					<div className="col-md-3">
						<Card style={{ width: "16rem" }} className="card-set">
							<Card.Img variant="top" className='card-img'  src={img8} />
							<Card.Body className="card-body">
								<Card.Title className="card-title">
                                <b>Movie Name</b>
                                    <p>xxxxxx</p>
								</Card.Title>

								
                <Button variant="success" className="card-button" href="/Retail">Book My Show</Button>

								<br></br>
								<br></br>
							</Card.Body>
						</Card>
					</div>
				</Row>
			</Container>
      
    </div>
  )
}
