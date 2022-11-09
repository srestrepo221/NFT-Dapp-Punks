import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

const Mint = ({provider, nft, cost, setIsLoading}) => {
	const [isWaiting, setIsWaiting] = useState(false)

	const mintHandler = async (e) => {
		e.preventDefault()
		setIsWaiting(true)
	
		try {
			const signer = await provider.getSigner()
			const transaction = await nft.connect(signer).mint(1, { value: cost })
			await transaction.wait()
		}	catch {
			window.alert('User rejected or transaction reverted')
		}	
		setIsLoading(true)
	}
	
	return(
		<Form onSubmit={mintHandler} style={{ maxWidth: '450px', margin: '50px auto' }}>
		{isWaiting ? (

			<Spinner animation="border" style={{ display: 'block', margin: '0 auto' }} />
		) : (
			<Form.Group>
		  	 <Button variant="primary" type="submit" style={{ width: '100%' }} >
		  		Mint
		  	 </Button>
		 	</Form.Group>
		 )}
		</Form>
	)
}

export default Mint;
