import './Examples.css'

export default function Examples() {
    return (
        <div id="examples">
            <div id="examples-content">
                <div id="examples-left">
                    <div className="bold-text">SHOWCASE YOUR WORK</div>
                    <div className="main-text">Perfect for social media and client presentations</div>
                    <div className="description">Create mockups that tell your brand story. From Instagram posts to client pitches, Brand Craft helps you present your designs in the most compelling way possible.</div>
                    <div className="examples-card-ctr">
                        <div className="examples-card">
                            <div className="examples-card-title align-text-center">Instagram Ready</div>
                            <div className="examples-card-description align-text-center">Perfect square formats for social media.</div>
                        </div>
                        <div className="examples-card">
                            <div className="examples-card-title align-text-center">Client Presentations</div>
                            <div className="examples-card-description align-text-center">High-resolution exports for proposals.</div>
                        </div>
                    </div>
                </div>
                <div id="examples-right">
                    <div id="image-container">
                        <div className="image image-half cup"></div>
                        <div className="image image-full bottle"></div>
                        <div className="image image-half soda-can"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}