import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			totalAmount: 200000,
			downPayment: 20000,
			interestRate: 4.5,
			amortizationPeriod: 30,
			paymentPeriod: 12
		}
	}

	handleTotalAmount = event => {
		this.setState({
			totalAmount: event.target.value
		})
	}

	handleDownPayment = event => {
		this.setState({
			downPayment: event.target.value
		})
	}

	handleInterestRate = event => {
		this.setState({
			interestRate: event.target.value
		})
	}

	handleamortizationPeriod = event => {
		this.setState({
			amortizationPeriod: event.target.value
		})
	}

	handlePaymentPeriod = event => {
		this.setState({
			paymentPeriod: event.target.value
		})
	}


	handleSubmit = event => {

		/*
		
		Mortgage Math
			number of payments = amortization period * payment period
			1yr yearly = 1
			1yr monthly = 12
		    1yr  bi-weekly = 24

                                     interest/paymentperiod(interest/paymentperiod+1)^number of payments
		(totalAmount - downpayment)* -----------------------
										((1+interest/paymentperiod)^number of payments) - 1 
		*/
		var principle = this.state.totalAmount - this.state.downPayment;
		var interestRate = (this.state.interestRate/100)/this.state.paymentPeriod;
		var numberOfPayments = this.state.paymentPeriod*this.state.amortizationPeriod;
		var interestRasiedToPayments = Math.pow((1+interestRate),numberOfPayments);
		var topMortgageEquation = interestRate*interestRasiedToPayments;
		var bottomMortgageEquation = interestRasiedToPayments-1;

		alert(`Total Amount:${this.state.totalAmount}\nDownPayment:${this.state.downPayment}\nInterestRate:${this.state.interestRate}\nAmortization Period:${this.state.amortizationPeriod}\nPayment Period:${this.state.paymentPeriod} \n
			   Mortgage Payment: ${(principle * (topMortgageEquation/bottomMortgageEquation)).toFixed(2)}`)
		event.preventDefault()
		
	}

	render() {
		const { totalAmount, downPayment, interestRate, amortizationPeriod, paymentPeriod} = this.state
		return (
			<form class ="container col-9 "onSubmit={this.handleSubmit}>
				<div class="form-group">
					<label>Total Amount: </label>
					<input class="form-control"
						value={totalAmount}
						onChange={this.handleTotalAmount}
					/>
				</div>
				<div class="form-group">
					<label>Down Payment</label>
					<input class="form-control"
						value={downPayment}
						onChange={this.handleDownPayment}
					/>
				</div>
				<div class="form-group">
					<label>Interest Rate</label>
					<input class="form-control"
						value={interestRate}
						onChange={this.handleInterestRate}
					/>
				</div>
				<div class="form-group">
					<label>Amortization Period</label>
					<input class="form-control"
						value={amortizationPeriod}
						onChange={this.handleamortizationPeriod}
					/>
				</div>
				<div >
					<label>Payment Period</label>
					<select value={paymentPeriod} onChange={this.handlePaymentPeriod}>
						<option value="12">Monthly</option>
						<option value="24">Bi-Weekly</option>
						<option value="1">Yearly</option>
					</select>
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		)
	}
}

export default Form