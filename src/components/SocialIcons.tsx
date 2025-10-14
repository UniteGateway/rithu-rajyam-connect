import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle, Send, Image as ImageIcon, Play, Share2, Hash } from "lucide-react";

const SocialIcons = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "https://facebook.com", color: "hover:text-blue-600" },
    { icon: Twitter, label: "Twitter/X", url: "https://twitter.com", color: "hover:text-sky-500" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com", color: "hover:text-pink-600" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com", color: "hover:text-blue-700" },
    { icon: Youtube, label: "YouTube", url: "https://youtube.com", color: "hover:text-red-600" },
    { icon: MessageCircle, label: "WhatsApp", url: "https://wa.me/919876543210", color: "hover:text-green-600" },
    { icon: Send, label: "Telegram", url: "https://t.me", color: "hover:text-sky-400" },
    { icon: ImageIcon, label: "Pinterest", url: "https://pinterest.com", color: "hover:text-red-500" },
    { icon: Share2, label: "Reddit", url: "https://reddit.com", color: "hover:text-orange-600" },
    { icon: Play, label: "Snapchat", url: "https://snapchat.com", color: "hover:text-yellow-400" },
    { icon: Play, label: "TikTok", url: "https://tiktok.com", color: "hover:text-black dark:hover:text-white" },
    { icon: Hash, label: "Mastodon", url: "https://mastodon.social", color: "hover:text-purple-600" },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          title={social.label}
          className={`bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-lg transition-all ${social.color}`}
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
