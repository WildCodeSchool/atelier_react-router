import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const HtmlDefinition = props => {
	return (
		<div>
			<Card>
				<CardImg
					top
					width='100%'
					src='https://cdn-images-1.medium.com/max/1096/1*28-1lYrYTQoLhi87mllgBw.png'
					alt='Card image cap'
				/>
				<CardBody>
					<CardTitle>HTML Définition</CardTitle>
					<CardSubtitle>HTML</CardSubtitle>
					<CardText>
						L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les
						pages web. C’est un langage permettant d’écrire de l’hypertexte, d’où son nom. HTML permet également de
						structurer sémantiquement et logiquement et de mettre en forme le contenu des pages, d’inclure des
						ressources multimédias dont des images, des formulaires de saisie et des programmes informatiques. Il permet
						de créer des documents interopérables avec des équipements très variés de manière conforme aux exigences de
						l’accessibilité du web. Il est souvent utilisé conjointement avec le langage de programmation JavaScript et
						des feuilles de style en cascade (CSS). HTML est inspiré du Standard Generalized Markup Language (SGML). Il
						s'agit d'un format ouvert.
					</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default HtmlDefinition;
