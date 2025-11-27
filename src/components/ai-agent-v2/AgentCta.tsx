const AgentCta = () => {
  return (
    <section className="sectionPadding bgGradient bg-center bg-no-repeat bg-cover bg-[url('/assets/img/bc/updates&media-bg.png')]" style={{background: 'linear-gradient(to left, #0f0c1e 30%, rgb(255 255 255 / 15%));'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <span className="buttonAnimation green inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto width_fit d-block">Higher Conversions</span>
                    <h2 className="text-center text-3xl md:text-5xl font-semibold headingSize">Achieve 70% higher conversions <br />
                    with AI Chatbot</h2>
                    <button className="mx-auto width_fit d-block mt-4 buttonAnimation2 green flex justify-center items-center gap-2 mt-4 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900">
                        Get Started Free
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AgentCta