  // src/app/[lang]/resources/page.tsx
  import { getDictionary } from "@/lib/i18n/get-dictionary";
  import { Container } from "@/components/shared/Container";
  import { DocumentCard } from "@/components/resources/DocumentCard";
  import type { Locale } from "@/lib/i18n/config";
  
  export default async function Resources({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    const dict = await getDictionary(lang);
    const resourcesDict = dict.resources;
  
    return (
      <div className="w-full bg-white">
        <Container className="py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-[#202F49] mb-8">
              {resourcesDict.title}
            </h1>
  
            <div className="space-y-8">
              {/* Course Catalog */}
              <DocumentCard
                title={resourcesDict.catalog.title}
                description={resourcesDict.catalog.description}
                downloadUrl="/documents/catalog.pdf"
                buttonText={resourcesDict.catalog.downloadButton}
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
  