import React from 'react';
import s from './Card.module.scss';

class Card extends React.Component {
    state = {
        done: false,
    }

    handleCardClick = () => {
        if(this.state.done === true) {
            this.setState({
                done: false,
            })
        } else {
            this.setState({
                done: true,
            })
        }
    }

    render() {
        const { eng, rus } = this.props;
        const { done } = this.state;

        const cardClass = [s.card];
        if (done) {
            cardClass.push(s.done);
        }

        return (
            <div
                className={cardClass.join(' ')}
                onClick={this.handleCardClick}
            >
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        { eng }
                    </div>
                    <div className={s.cardBack}>
                        { rus }
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;