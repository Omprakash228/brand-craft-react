import './Solution.css'

export default function Solution() {
    return (
        <div id="solution">
            <div id="solution-content">
                <div className="bold-text">THE SOLUTION</div>
                <div className="section-description dark align-text-center">Imagine if you could...</div>
                <div id="solution-container">
                    <div id="solution-left">
                        <div className="step">
                            <div className="step-number">1</div>
                            <div>
                                <div className="feature-card-title dark">Upload Your Design</div>
                                <div className="step-description">Simply drag and drop your logo or design file. Brand Craft supports all major formats.</div>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <div>
                                <div className="feature-card-title dark">Choose Your Model</div>
                                <div className="step-description">Select from hundreds of professional mockup templates—business cards, signage, packaging, and more.</div>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <div>
                                <div className="feature-card-title dark">Customize Everything</div>
                                <div className="step-description">Adjust lighting, environment, colors, and positioning with intuitive controls.</div>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-number">4</div>
                            <div>
                                <div className="feature-card-title dark">Export & Share</div>
                                <div className="step-description">Download high-resolution mockups ready for client presentations or social media.</div>
                            </div>
                        </div>
                    </div>
                    <div id="solution-right"></div>
                </div>
            </div>
        </div >
    )
}