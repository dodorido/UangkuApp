import { resourcesLinks, platformLinks, communityLinks } from "../constant"
import { useNavigate } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <h30 className="text-md font-semibold mb-4">Ini Footer</h30>
                <ul className="space-y-2">
                    {resourcesLinks.map((link, index) => (
                        <li key={index}>
                            <a className="text-neutral-700 hover:text-neutral-400" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </footer>
  )
}
export default Footer