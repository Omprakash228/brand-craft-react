import './Features.css'

export default function Features() {
    return (
        <div id="features">
            <div id="features-content">
                <div className="bold-text">FEATURES</div>
                <div className="section-description align-text-center">Everything you need to create stunning mockups</div>
                <div className="feature-card-ctr">
                    <div className="feature-card">
                        <div className="feature-card-title align-text-center">Smart Model Adjustment</div>
                        <div className="feature-card-description align-text-center">Perfectly fit your designs on any surface with intelligent perspective matching and automatic scaling.</div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card-title align-text-center">Environment Control</div>
                        <div className="feature-card-description align-text-center">Choose from hundreds of professional environments or upload your own custom backgrounds.</div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card-title align-text-center">One-Click Export</div>
                        <div className="feature-card-description align-text-center">Export high-resolution mockups ready for social media, client presentations, or portfolio use.</div>
                    </div>
                </div>
                <div className="feature-row2">
                    <div className="feature-column">
                        <div className="feature-card-title">One-Click Export</div>
                        <ul>
                            <li className="feature-card-description">Real-time lighting adjustments</li>
                            <li className="feature-card-description">Perspective and angle controls</li>
                            <li className="feature-card-description">Color and material options</li>
                            <li className="feature-card-description">Shadow and reflection settings</li>
                        </ul>
                    </div>
                    <div className="feature-column">
                        <div className="feature-card-title">Professional Output</div>
                        <ul>
                            <li className="feature-card-description">High resolution exports</li>
                            <li className="feature-card-description">Multiple format support</li>
                            <li className="feature-card-description">Social media ready</li>
                            <li className="feature-card-description">Print-ready quality</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}