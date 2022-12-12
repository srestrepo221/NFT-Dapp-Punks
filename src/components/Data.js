import { ethers } from 'ethers'

const Data = ({maxSupply, TotalSupply, cost, balance}) => {
	return (
		<div className='text-center'>
			<p><strong>Available to Mint:</strong> {maxSupply - TotalSupply}</p>
			<p><strong>Cost to Mint:</strong> {ethers.utils.formatUnits(cost, 'ether')} ETH </p>
			<p><strong>You own:</strong> { balance.toString()} </p>
		</div>

	)
}

export default Data;
