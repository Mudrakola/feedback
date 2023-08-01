import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isClickFeedback: true,
  }

  onClickEmoji = () => {
    this.setState({isClickFeedback: false})
  }

  render() {
    const {isClickFeedback} = this.state
    const {resources} = this.props
    return (
      <div className="bg-container">
        <div className="card">
          {isClickFeedback ? (
            <>
              <h1 className="feedback">
                How satisfied are you with our customer support performance
              </h1>
              <ul className="list-container">
                {resources.emojis.map(eacItem => (
                  <li
                    className="emoji-container"
                    onClick={this.onClickEmoji}
                    key={eacItem.id}
                  >
                    <img
                      src={eacItem.imageUrl}
                      className="emoji-image"
                      alt={eacItem.name}
                    />
                    <p className="emoji-name">{eacItem.name}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <img
                src={resources.loveEmojiUrl}
                className="emoji-image"
                alt="love emoji"
              />
              <h1 className="thank-you-para">Thank you</h1>
              <p className="feedback-reply">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
