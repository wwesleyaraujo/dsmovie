package com.devsuperior.dsmovie.repositories;


import org.springframework.data.domain.PageRequest;

import org.springframework.data.domain.Sort;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
	final PageRequest pageByScore = PageRequest.of(0,30,Sort.by(Sort.Direction.DESC, "score"));
	final PageRequest pageByTitle = PageRequest.of(0,30,Sort.by(Sort.Direction.ASC, "title"));
	final PageRequest pageByCount = PageRequest.of(0,30,Sort.by(Sort.Direction.DESC, "count"));

}
