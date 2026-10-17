
export const articleStyleText = `
                .article-rich-text {
                    color: #e4e4e7 !important;
                    font-family: var(--font-inter), sans-serif !important;
                    font-size: 1.125rem !important; 
                    line-height: 1.8 !important;
                }

                @media (min-width: 768px) {
                    .article-rich-text {
                        font-size: 1.25rem !important; 
                        line-height: 1.85 !important;
                    }
                }

                .article-rich-text p {
                    margin-top: 0 !important;
                    margin-bottom: 2rem !important;
                    color: #e4e4e7 !important;
                }

                .article-rich-text > * + * {
                    margin-top: 2.5rem !important;
                }

                .article-rich-text strong {
                    color: #ffffff !important;
                    font-weight: 600 !important;
                }

                .article-rich-text h2 {
                    color: #ffffff !important;
                    font-family: var(--font-space), sans-serif !important;
                    font-size: 2rem !important;
                    line-height: 1.3 !important;
                    margin-top: 4rem !important; 
                    margin-bottom: 1.5rem !important;
                    scroll-margin-top: 100px !important;
                }

                .article-rich-text h3 {
                    color: #ffffff !important;
                    font-family: var(--font-space), sans-serif !important;
                    font-size: 1.5rem !important;
                    line-height: 1.4 !important;
                    margin-top: 3rem !important;
                    margin-bottom: 1rem !important;
                    scroll-margin-top: 100px !important;
                }

                .article-rich-text ul {
                    list-style-type: disc !important;
                    padding-left: 1.75rem !important;
                    margin-bottom: 2rem !important;
                }

                .article-rich-text ol {
                    list-style-type: decimal !important;
                    padding-left: 1.75rem !important;
                    margin-bottom: 2rem !important;
                }

                .article-rich-text li {
                    margin-bottom: 0.75rem !important;
                    padding-left: 0.5rem !important;
                    color: #e4e4e7 !important;
                }

                .article-rich-text li::marker {
                    color: #a78bfa !important; 
                    font-size: 1.2em !important;
                }

                .article-rich-text blockquote {
                    border-left: 3px solid #a78bfa !important;
                    padding: 1.5rem 0 1.5rem 2rem !important;
                    margin: 3rem 0 !important;
                    font-style: italic !important;
                    font-size: 1.25em !important;
                    color: #ffffff !important;
                    background: linear-gradient(90deg, rgba(167, 139, 250, 0.08) 0%, transparent 100%) !important;
                    border-radius: 0 12px 12px 0 !important;
                }

                .article-rich-text img {
                    border-radius: 1rem !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    width: 100% !important;
                    height: auto !important;
                    margin: 3rem 0 !important;
                }

                .article-rich-text a {
                    color: #c4b5fd !important;
                    text-decoration: underline !important;
                    text-underline-offset: 4px !important;
                    text-decoration-color: rgba(196, 181, 253, 0.4) !important;
                    transition: all 0.2s ease !important;
                }

                .article-rich-text a:hover {
                    color: #ddd6fe !important;
                    text-decoration-color: #ddd6fe !important;
                }

                .article-rich-text code {
                    background-color: rgba(255, 255, 255, 0.1) !important;
                    padding: 0.2rem 0.4rem !important;
                    border-radius: 4px !important;
                    font-size: 0.9em !important;
                    font-family: monospace !important;
                    color: #c4b5fd !important;
                }

                .article-rich-text pre {
                    background-color: #111111 !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    padding: 1.5rem !important;
                    border-radius: 12px !important;
                    overflow-x: auto !important;
                    margin: 2rem 0 !important;
                }

                .article-rich-text pre code {
                    background-color: transparent !important;
                    padding: 0 !important;
                    color: rgba(255, 255, 255, 0.8) !important;
                }

                .article-rich-text ::selection {
                    background-color: rgba(167, 139, 250, 0.4) !important;
                    color: #ffffff !important;
                }
            `