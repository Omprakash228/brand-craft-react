import './Problem.css'

export default function Problem() {
    return (
        <div id="problem">
            <div id="problem-content">
                <div className="bold-text">THE PROBLEM</div>
                <div className="section-description align-text-center">You know the struggle...</div>
                <div className="feature-card-ctr">
                    <div className="feature-card">
                        <div className="feature-card-title align-text-center">Hours of Manual Work</div>
                        <div className="feature-card-description align-text-center">You spend 3-4 hours creating a single mockup, adjusting perspectives, lighting, and shadows manually in Photoshop.</div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card-title align-text-center">Creative Block</div>
                        <div className="feature-card-description align-text-center">Designers want to visualize their ideas in real-world settings, but crafting realistic mockups manually delays the work flow.</div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card-title align-text-center">Lost Opportunities</div>
                        <div className="feature-card-description align-text-center">While you're creating mockups, competitors with faster turnaround times are winning the projects.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}