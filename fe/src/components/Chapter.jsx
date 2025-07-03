import React from 'react';

function Chapter() {
  return (
    <>
      <div className="chapter">
        <div className="chapter-line" />
        <div className="chapter-name">Latest News</div>
      </div>
      <div className="main-container">
        <div className="main-col-2 main-tag-1">
          <a className="main-tag" href="#tech">
            Fashion News
          </a>
        </div>
        <div className="main-col-2">
          <div className="main-row-2">
            <div className="main-col-2 main-tag-2">
              <a className="main-tag" href="#customer">
                Tips & Advice
              </a>
            </div>
            <div className="main-col-2 main-tag-3">
              <a className="main-tag" href="#rate">
                Product Reviews
              </a>
            </div>
          </div>
          <div className="main-row-2 main-tag-4">
            <a className="main-tag" href="#guide">
              Guides & FAQs
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chapter;
