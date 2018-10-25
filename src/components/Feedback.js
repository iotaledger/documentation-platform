import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components'
import ClickOutside from 'components/ClickOutside'

class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      comments: '',
      open: false
    };

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  onChange(e) {
    const comments = e.target.value
    this.setState({ comments })
  }

  submit() {
    const submitFn = this.props.submitFn
    submitFn(this.state.rating, this.state.comments)
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const { rating } = this.state;
    const { btnLabel, title, postRatingLabel } = this.props
    return (
      <div>
        <FloatingCercle onClick={this.toggle}>{this.state.open ? 'X' : 'Feedback'}</FloatingCercle>
        <ClickOutside onClickOutside={this.close}>
          <div>
            {this.state.open && (<BodyContainer>
              <h2>{title}</h2>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick}
              />
              <div><textarea value={this.state.comments} onChange={this.onChange}></textarea></div>
              <div><button onClick={this.submit}>{btnLabel}</button></div>
            </BodyContainer>)}
          </div>
        </ClickOutside>
      </div>
    );
  }
}

Feedback.defaultProps = {
  title: 'Your feedback',
  btnLabel: 'Submit',
};

export default Feedback

const BodyContainer = styled.div`
  padding: 5px;
  border: 1px solid #008000;
  position: fixed;
  box-shadow:  0 0 10px  rgba(0,0,0,0.6);
  bottom: 130px;
  right: 40px;
  background-color: #ffffff;
`;

const FloatingCercle = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #008000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:  0 0 10px  rgba(0,0,0,0.6);
  color: #ffffff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
`;
