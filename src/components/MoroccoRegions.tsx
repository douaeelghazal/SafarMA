import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { moroccoConfig } from "@/config/morocco";
import AnimatedSection from "@/components/AnimatedSection";

const MoroccoRegions = () => {

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              🇲🇦 Explore Morocco
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover Morocco's most enchanting destinations. SAFAR adapts to each region with localized recommendations and cultural insights.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {moroccoConfig.regions.map((region, i) => (
            <AnimatedSection key={region.id} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 border border-border hover:border-secondary/50 hover:shadow-xl transition-all group"
              >
                {/* Header with map icon */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                      {region.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span>{region.coordinates[0].toFixed(2)}°, {region.coordinates[1].toFixed(2)}°</span>
                    </div>
                  </div>
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 20 }}
                    className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors"
                  >
                    <Navigation className="h-5 w-5 text-secondary" />
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {region.description}
                </p>

                {/* Attractions */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">Top Attractions</p>
                  <div className="flex flex-wrap gap-2">
                    {region.attractions.map((attraction) => (
                      <span
                        key={attraction}
                        className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 transition-colors"
                      >
                        {attraction}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover cta */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-4 pt-4 border-t border-border/50"
                >
                  <p className="text-xs text-secondary font-medium flex items-center gap-1">
                    <span>→</span> Plan your adventure in {region.name}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Cultural Elements Section */}
        <AnimatedSection>
          <div className="mt-20 pt-10 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">🎨 Morocco's Rich Heritage</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Artifacts */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-4">Traditional Crafts</h4>
                <ul className="space-y-2">
                  {moroccoConfig.cultural.artifacts.map((artifact) => (
                    <li key={artifact} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {artifact}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Traditions */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-4">Living Traditions</h4>
                <ul className="space-y-2">
                  {moroccoConfig.cultural.traditions.map((tradition) => (
                    <li key={tradition} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {tradition}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cuisine */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-4">Must-Try Cuisine</h4>
                <ul className="space-y-2">
                  {moroccoConfig.cultural.cuisine.map((dish) => (
                    <li key={dish} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {dish}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MoroccoRegions;
